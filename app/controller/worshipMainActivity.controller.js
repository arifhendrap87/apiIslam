const db = require("../config/db.config.js");
const worshipMainActivity = db.worshipMainActivity;


exports.findAll = async (req, res) => {
    try {
        var param = {};
        if (Object.keys(req.body).length != 0) {
            var param = { where: req.body };
        }

        worshipMainActivity.findAll(param).then((result) => {
            res.status(200).json({
                status: 200,
                success: true,
                data: result,
            });
        });

    } catch (err) {
        console.log(err);
    }
};