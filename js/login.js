new Vue({
    el: "#login-app",
    data() {
        return {
            //利用"物件"扁平化多種變數，節省效能
            form: {    
                account: "",
                password: "",
            },
            required: {
                account: "帳號",
                password: "密碼"
            }
        }
    },
    methods: {
        doLogin() {
            try {   //驗證呼叫
                this.validRequired();
                this.validAccount();
                this.validPassword();
                this.doLoginProcess();  //成功印出結果
            } catch (e) {
                let msg = e instanceof Error ? e.message : e;  //有沒有得到Error這個物件，e.message為Error內的訊息
                this.errorMessage(msg);

            }
        },
        doLoginProcess(){
            fetch("db/member.json")    // fetch為ES6原生AJAX傳送方式
                .then((rep) => { 
                    return rep.json();
                })
                .then((result) => {
                    let member = result.filter((m) => {    //過濾比對是否符合輸入資料，返回判斷正確的資料
                        return m.account == this.form.account && m.password == this.form.password;
                    });
                    if (member.length > 0) {    //符合資料完只會有一筆
                        this.doSaveMember(member[0]);
                        return this.successMessage("歡迎登入: " + member[0].name, () => {
                            location.href = "/";
                        });
                    }
                    this.errorMessage("登入失敗");
                });
        },
        doSaveMember(member) {
            
            localStorage.setItem("member", JSON.stringify(member));
        },
        validRequired() {   //驗證必填欄位   有錯誤返回做catch
            for (let f in this.form) {
                if (!this.form[f] && this.required[f]) {
                    // throw new "QQQQQQ"  //   e
                    throw new Error(this.required[f] + "未填寫");    //  e.message
                }
            }
        },
        validAccount() {  //驗證帳號     有錯誤返回做catch
            let reg = /.*@.*\..*/;
            if (!this.form.account || !reg.test(this.form.account)) {
                throw new Error("帳號格式錯誤");
            }
        },
        validPassword() {   //驗證密碼     有錯誤返回做catch
            if (!this.form.password || this.form.password.length < 6) {
                throw new Error("密碼格式錯誤，至少六碼");
            }
        },
        errorMessage(message, callback) {   //sweetalert2 格式  登入失敗或驗證失敗給指定字串返回結果
            Swal.fire({
                title: "錯誤",
                icon: "error",
                html: message,
            }).then(() => {
                if (typeof callback == "function") { 
                    callback();
                }
            });
        },
        successMessage(message, callback) {    //登入成功時給指定字串返回結果
            Swal.fire({
                title: "完成",
                icon: "success",
                html: message,
            }).then(() => {
                if (typeof callback == "function") {
                    callback();
                }
            });
        },
        isLogin() {    //判斷是否登入
            let member = localStorage.getItem("member");
            return member && JSON.parse(member).account;
        },
    },
    mounted() {    //畫面渲染完後自動做
        if (this.isLogin()) {
            location.href = "/";     //如已登入成功，就不能再點登入
        }
    },
})