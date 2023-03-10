class moduleClient {
    constructor() {
        this.post = async (url = "" , data={}) => {
            return fetch(url, {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((e)=>e.text().then((context)=>context))
        },
        this.get = async (url = "") => {
            return fetch(url, {
                headers: {
                    'content-type': 'application/json'
                }
            }).then((e)=>e.text().then((context)=>context))
        }
        this.addAction = (el = '' , action , deley) => {
            setTimeout(()=>{
                document.querySelector(el).classList.add(action)
            } , deley)
        }
        this.rmAction = (el = '' , action , deley) => {
            setTimeout(()=>{
                document.querySelector(el).classList.remove(action)
            } , deley)
        }
    }
}

const clientMo = new moduleClient()

export {clientMo}