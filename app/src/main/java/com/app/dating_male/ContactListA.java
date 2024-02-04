package com.app.dating_male;


import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.ProgressDialog;
import android.content.ContentResolver;
import android.content.Context;
import android.database.Cursor;
import android.os.AsyncTask;
import android.os.Build;
import android.os.Bundle;
import android.provider.ContactsContract;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.View;
import android.widget.AdapterView;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.ListView;
import android.widget.Toast;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;

//https://www.simplifiedcoding.net/android-login-and-registration-tutorial/

public class ContactListA extends Activity {

    List<ContactModel> contacts;
    ListView listView;
    ContactAdp contactAdp;

    ProgressDialog dialog;

    private static final String[] PROJECTION = new String[] {
            ContactsContract.CommonDataKinds.Phone.CONTACT_ID,
            ContactsContract.Contacts.DISPLAY_NAME,
            ContactsContract.CommonDataKinds.Phone.NUMBER
    };

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_contact_list);

        ImageButton ib = (ImageButton) findViewById(R.id.ib_back);
        ib.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                finish();
            }
        });

        EditText etSearch = (EditText) findViewById(R.id.search_box);

        dialog = new ProgressDialog(this);
        dialog.setCancelable(false);
        dialog.setTitle("Please wait loading all contacts");
        dialog.show();

        new FetchContacts().execute();

        listView = (ListView) findViewById(R.id.lv_list);

        final List<ContactModel> contacts = new ArrayList<>();

        contactAdp = new ContactAdp(contacts, this);

        listView.setAdapter(contactAdp);
        listView.setTextFilterEnabled(true);

        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {

                contactAdp.updateSelected(i);

//                contactAdp.update(contacts);
            }
        });

        // Add Text Change Listener to EditText
        etSearch.addTextChangedListener(new TextWatcher() {

            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {
                // Call back the Adapter with current character to Filter
                contactAdp.getFilter().filter(s.toString());
            }

            @Override
            public void beforeTextChanged(CharSequence s, int start, int count,int after) {
            }

            @Override
            public void afterTextChanged(Editable s) {
            }
        });

    }


    public List<ContactModel> getContacts(Context ctx) {

        List<ContactModel> list = new ArrayList<>();
        final String[] PROJECTION = new String[] {
                ContactsContract.CommonDataKinds.Phone.CONTACT_ID,
                ContactsContract.Contacts.DISPLAY_NAME,
                ContactsContract.CommonDataKinds.Phone.DATA
        };


        ContentResolver cr = getContentResolver();
        Cursor cursor = cr.query(ContactsContract.CommonDataKinds.Phone.CONTENT_URI, PROJECTION, null, null, null);
        if (cursor != null) {
            try {
                final int displayNameIndex = cursor.getColumnIndex(ContactsContract.Contacts.DISPLAY_NAME);
                String displayName, address;
                while (cursor.moveToNext()) {
                    displayName = cursor.getString(displayNameIndex);
                    String phonNo = cursor.getString(cursor.getColumnIndex(ContactsContract.CommonDataKinds.Phone.NUMBER)).replace(" ", "");

                    boolean isExisting = false;
                    for (ContactModel con : list){
                        if (phonNo.equalsIgnoreCase(con.mobileNumber)){
                            isExisting = true;
                            break;
                        }
                    }

                    if (!isExisting){
                        ContactModel info = new ContactModel();
                        info.name = displayName;
                        info.mobileNumber = phonNo;

                        list.add(info);
                    }
                }
            } finally {
                cursor.close();
            }
        }

        Collections.sort(list, new Comparator<ContactModel>() {
            @Override
            public int compare(ContactModel c1, ContactModel c2) {
                return c1.name.compareTo(c2.name);
            }
        });
        return list;
    }

    public void onClickSubmit(View view) {

        HashMap<String, String> params = new HashMap<>();


        boolean isSelected = false;

        int j = 0;
        for (int i=0; i<contacts.size(); i++){

            ContactModel con = contacts.get(i);

            if (con.isSelected){
                isSelected = true;

                params.put("name["+j+"]", con.name);
                params.put("ph_no["+j+"]", con.mobileNumber);
                params.put("user_id", MainActivity.userID);
                j++;
            }

        }

        if (isSelected){
            uploadCon(params);
        }else{
            Toast.makeText(this, "Please select contact", Toast.LENGTH_LONG).show();
        }


    }

    private void uploadCon(final HashMap<String, String> params) {

        class UploadContact extends AsyncTask<Void, Void, String> {

            private ProgressDialog progressBar;

            @Override
            protected String doInBackground(Void... voids) {
                //creating request handler object
                RequestHandler requestHandler = new RequestHandler();

//                //creating request parameters
//                HashMap<String, String> params = new HashMap<>();
//                params.put("contact_name", "Dharm");
//                params.put("contact_no", "7976337681");
//                params.put("user_id", "1");

                //returing the response
                System.out.println("Request " + params.toString());
                return requestHandler.sendPostRequest("https://app-development-company.in/clients/salon/erp/API/add_contact.php", params);
            }

            @Override
            protected void onPreExecute() {
                super.onPreExecute();
                //displaying the progress bar while user registers on the server
                progressBar = new ProgressDialog(ContactListA.this);
                progressBar.setTitle("Please wait...");
                progressBar.setCancelable(false);
                progressBar.show();
            }

            @Override
            protected void onPostExecute(String s) {
                super.onPostExecute(s);
                //hiding the progressbar after completion
                progressBar.dismiss();

                Toast.makeText(getApplicationContext(), s, Toast.LENGTH_SHORT).show();

                finish();
            }

        }
        //executing the async task
        UploadContact ru = new UploadContact();
        ru.execute();
    }

    class FetchContacts extends AsyncTask<Void, Void,
            List<ContactModel>> {

        private final String DISPLAY_NAME = Build.VERSION.SDK_INT >=
                Build.VERSION_CODES.HONEYCOMB ?
                ContactsContract.Contacts.DISPLAY_NAME_PRIMARY :
                ContactsContract.Contacts.DISPLAY_NAME;

        private final String FILTER = DISPLAY_NAME + " NOT LIKE '%@%'";

        private final String ORDER = String.format("%1$s COLLATE NOCASE",
                DISPLAY_NAME);

        @SuppressLint("InlinedApi")
        private final String[] PROJECTION = {
                ContactsContract.Contacts._ID,
                DISPLAY_NAME,
                ContactsContract.Contacts.HAS_PHONE_NUMBER
        };

        @Override
        protected List<ContactModel> doInBackground(Void... params) {
            try {
                List<ContactModel> contacts = getContacts(ContactListA.this);

                return contacts;
            } catch (Exception ex) {
                return null;
            }
        }

        @Override
        protected void onPostExecute(List<ContactModel> contacts1) {
            if (contacts1 != null) {
                // success
                contacts = contacts1;
                contactAdp.update(contacts);
                dialog.dismiss();
            } else {
                // show failure
                // syncFailed();
            }
        }
    }

}

class ContactModel {
    public String name;
    public String mobileNumber;
    public boolean isSelected = false;

    public ContactModel(){

    }

    public ContactModel(String name, String mobileNumber, boolean isSelected){
        this.name = name;
        this.mobileNumber = mobileNumber;
        this.isSelected = isSelected;
    }

    public String getName() {
        return name;
    }

    @Override
    public String toString() {
        return "ContactModel{" +
                ", name='" + name + '\'' +
                ", mobileNumber='" + mobileNumber + '\'' +
                ", isSelected=" + isSelected +
                '}';
    }
}
