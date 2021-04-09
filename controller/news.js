const { json } = require("express")
const { AllItem } = require("../utils/getNotes")


const getNews = async(req, res) => {
    try {
       
        let news = await AllItem(process.env.URL)
        return res.status(200).json({data:news})
       

    } catch (error) {
        return res.status(500).json(error)
    }


}

module.exports = {
    getNews
}
