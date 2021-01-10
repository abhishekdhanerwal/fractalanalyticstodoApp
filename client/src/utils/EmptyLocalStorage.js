export const emptyLocalStorage = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('ssoid');
    sessionStorage.removeItem('agentName');
    sessionStorage.removeItem('channel');
    sessionStorage.removeItem('goCode');
    sessionStorage.removeItem('stateCd');
    sessionStorage.removeItem('stateDesc');
    sessionStorage.removeItem('channelName');
    sessionStorage.removeItem('channelId');
    sessionStorage.removeItem('dbId');
    sessionStorage.removeItem('selectedProduct');
    sessionStorage.removeItem("view");
    sessionStorage.removeItem("timerInMinutes");
    sessionStorage.removeItem("mprospectChannels");
};