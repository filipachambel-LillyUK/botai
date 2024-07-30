export default function Chat() {
    
    (function(d, m){
    
        var kommunicateSettings = 
            {"appId":"34e5311f7b600a7cf535e7767f4777586","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
    return(
        <>
        Lilly chatbot
        </>
    )

}