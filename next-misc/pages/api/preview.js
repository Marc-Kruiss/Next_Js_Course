export default function handler(req,res){
    res.setPreviewData({user:'Marc'})
    res.redirect(req.query.redirect)
}