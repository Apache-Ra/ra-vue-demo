import Vue from 'vue'

Vue.prototype.setCookie = function (name, value, day) {
    let date = new Date
    date.setTime(date.getTime() + 24*60*60*1000*day);
    window.document.cookie = name + "=" + value + ";path=/;expires=" + date.toGMTString();
}
Vue.prototype.getCookie = function (name) {
    let v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null
}
Vue.prototype.delCookie = function (name) {
    let date = new Date
    date.setTime(date.getTime() - 1)
    let val = this.getCookie(name)
    if(val != null){
        document.cookie= name + "="+val+";expires="+date.toGMTString();
    }

}