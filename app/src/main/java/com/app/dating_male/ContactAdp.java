package com.app.dating_male;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import android.widget.BaseAdapter;
import android.widget.Filter;
import android.widget.Filterable;
import android.widget.ImageView;
import android.widget.TextView;

import java.util.ArrayList;
import java.util.List;

public class ContactAdp extends BaseAdapter implements View.OnClickListener, Filterable {

    private List<ContactModel> mOriginalValues; // Original Values
    private List<ContactModel> mDisplayedValues;
    ContactListA activity;

    LayoutInflater inflater;

    // View lookup cache
    private static class ViewHolder {
        TextView tvName;
        TextView tvPhoneNo;
        ImageView ivCheckBox;
    }

    public ContactAdp(List<ContactModel> data, ContactListA context) {
//        super(context, R.layout.list_item_contacts, data);
        this.mOriginalValues = data;
        this.mDisplayedValues = data;
        this.activity = context;

        inflater = LayoutInflater.from(context);
    }

    @Override
    public int getCount() {
        return mDisplayedValues.size();
    }

    @Override
    public Object getItem(int position) {
        return position;
    }

    @Override
    public long getItemId(int position) {
        return position;
    }

    @Override
    public void onClick(View v) {

        int position=(Integer) v.getTag();
        Object object= getItem(position);
        ContactModel dataModel=(ContactModel)object;

        switch (v.getId())
        {
//            case R.id.iv_arrow:
//                Snackbar.make(v, "Release date " +dataModel.getSiteName(), Snackbar.LENGTH_LONG)
//                        .setAction("No action", null).show();
//                break;
        }
    }

    private int lastPosition = -1;

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        // Get the data item for this position
        ContactModel dataModel = mDisplayedValues.get(position);

        ViewHolder viewHolder; // view lookup cache stored in tag

        final View result;

        if (convertView == null) {

            viewHolder = new ViewHolder();

            convertView = inflater.inflate(R.layout.list_item_contacts, parent, false);

            viewHolder.tvName       = (TextView) convertView.findViewById(R.id.tv_name);
            viewHolder.tvPhoneNo    = (TextView) convertView.findViewById(R.id.tv_phone);
            viewHolder.ivCheckBox   = (ImageView) convertView.findViewById(R.id.iv_checkBox);

            result=convertView;

            convertView.setTag(viewHolder);
        } else {
            viewHolder = (ViewHolder) convertView.getTag();
            result=convertView;
        }

        lastPosition = position;

        viewHolder.tvName.setText(dataModel.name);
        viewHolder.tvPhoneNo.setText(dataModel.mobileNumber);

        if (dataModel.isSelected){
            viewHolder.ivCheckBox.setBackgroundResource(R.mipmap.checkbox);
        }else{
            viewHolder.ivCheckBox.setBackgroundResource(R.mipmap.uncheckbox);
        }

//        viewHolder.ivCheckBox.setText(String.valueOf(dataModel.getQuantity()));


//        viewHolder.ivArrow.setOnClickListener(this);
//        viewHolder.ivArrow.setTag(position);

        // Return the completed view to render on screen
        return convertView;
    }

    public void updateSelected(int index){

        ContactModel con = mDisplayedValues.get(index);
        con.isSelected = !con.isSelected;

        mDisplayedValues.set(index, con);
        mOriginalValues.set(getOriginalDatIndex(con.mobileNumber), con);
        activity.contacts.set(getOriginalDatIndex(con.mobileNumber), con);

        notifyDataSetChanged();
    }

    int getOriginalDatIndex(String phoneNo){

        for (int i=0; i<mOriginalValues.size(); i++){
            ContactModel con =  mOriginalValues.get(i);
            if (phoneNo.equalsIgnoreCase(con.mobileNumber)){
                return i;
            }
        }
        return 0;
    }

    public void update(List<ContactModel> lsites){

        mOriginalValues.clear();

        for (ContactModel site : lsites)
            mOriginalValues.add(site);

        notifyDataSetChanged();
    }

    @Override
    public Filter getFilter() {
        Filter filter = new Filter() {

            @SuppressWarnings("unchecked")
            @Override
            protected void publishResults(CharSequence constraint,FilterResults results) {

                mDisplayedValues = (ArrayList<ContactModel>) results.values; // has the filtered values
                notifyDataSetChanged();  // notifies the data with new filtered values
            }

            @Override
            protected FilterResults performFiltering(CharSequence constraint) {
                FilterResults results = new FilterResults();        // Holds the results of a filtering operation in values
                ArrayList<ContactModel> FilteredArrList = new ArrayList<ContactModel>();

                if (mOriginalValues == null) {
                    mOriginalValues = new ArrayList<ContactModel>(mDisplayedValues); // saves the original data in mOriginalValues
                }

                if (constraint == null || constraint.length() == 0) {

                    // set the Original result to return
                    results.count = mOriginalValues.size();
                    results.values = mOriginalValues;
                } else {
                    constraint = constraint.toString().toLowerCase();
                    for (int i = 0; i < mOriginalValues.size(); i++) {
                        String data = mOriginalValues.get(i).name;
                        if (data.toLowerCase().startsWith(constraint.toString())) {
                            FilteredArrList.add(new ContactModel(mOriginalValues.get(i).name, mOriginalValues.get(i).mobileNumber, mOriginalValues.get(i).isSelected));
                        }
                    }
                    // set the Filtered result to return
                    results.count = FilteredArrList.size();
                    results.values = FilteredArrList;
                }
                return results;
            }
        };
        return filter;
    }
}