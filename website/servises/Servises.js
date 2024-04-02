import http from "../common/http-common"
const getdata=()=>{
    return http.get("./posts")
}
const Servises={
    getdata

}
export default Servises