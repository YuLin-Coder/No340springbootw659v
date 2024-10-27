const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootw659v/",
            name: "springbootw659v",
            // 退出到首页链接
            indexUrl: ''
        };
    },
    getProjectName(){
        return {
            projectName: "大学生助学贷款管理系统"
        } 
    }
}
export default base
