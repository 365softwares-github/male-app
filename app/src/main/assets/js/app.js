// Global variables which will be modified when running module import
let ZIM, ZegoUIKitPrebuilt, axios;

const baseURL = 'https://easebizz.com/projects/dating_app/admin/API';


const main = async () => {
    initializeCall()
}

/** 
 * This is for no ESM Support in this app 
 * 
 * I will add the equivalent ESM import in 
 * the top of the require syntax.
*/
const importModulesRun = (run) => {
    require([
        'js/zego-zim-web/index', 
        'js/zegocloudzego-uikit-prebuilt/zego-uikit-prebuilt',
        'js/axios/dist/axios.min.js'
    ], (zegoZimWeb, zegocloudzegoUikitPrebuilt, axiosLib) => {
        // import { ZIM } from "zego-zim-web";
        ZIM = zegoZimWeb.ZIM

        // import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
        ZegoUIKitPrebuilt = zegocloudzegoUikitPrebuilt.ZegoUIKitPrebuilt

        // import axios from 'axios';
        axios = axiosLib
        
        run()
    })
}

const initializeCall = async () => {
    const userId = await getLoggedInUserId()

    if(! userId) {
        return
    }

    const TOKEN = await getToken(userId)

    const zp = ZegoUIKitPrebuilt.create(TOKEN)
    zp.addPlugins({ ZIM })

    window.zp = zp
}

const getToken = async (uid) => {
    const tokenUrl = `${baseURL}/token_genaration.php?uid=${uid}`

    const { data: { token_message: token } } = await axios.get(tokenUrl)

    return token
}

const getLoggedInUserId = async () => {
    return window.localStorage.getItem("user_id")
}

window.addEventListener('load', () => {
    importModulesRun(main)
})
