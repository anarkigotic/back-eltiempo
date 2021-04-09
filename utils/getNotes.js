
const request = require("request");
const cheerio = require("cheerio");


 const AllItem = (url) => {
    let item = []
    return new Promise((resolve, reject) => {
        request(url, (err, response, html) => {
            if (!err) {
                const $ = cheerio.load(html);
                $('article').map((id, ele) => {
                    ele = $(ele);
                    let tag = ele.find(".category").html();
                    let time = ele.find(".published-at").html();
                    let title = ele.find(".title.page-link").html();
                    let image = ($(ele).find('img').attr('data-original'));
                    image = image ? image : "https://www.eltiempo.com/images/logo250.jpg"
                    image = String(image).includes('https://www.eltiempo.com') ? image : `https://www.eltiempo.com/${image}`
                    item = [...item, {
                        id,
                        tag,
                        title,
                        time,
                        image
                    }];
                });
                
                resolve(item)
                
            }
            reject(err);

        });

    })
}

module.exports = {
    AllItem
}
