async function sendResponse(res, error, newHotel) {
    if (Object.keys(error).length) {
        res.status(400).json({error});
    } else {
        newHotel.save();
        res.status(200);
        res.end();
    }
}
module.exports = {sendResponse};
