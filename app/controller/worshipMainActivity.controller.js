const db = require("../config/db.config.js");
const worship_main_activity = db.worship_main_activity;
const worship_main = db.worship_main;

// worshipMainActivity.belongsTo(worshipMain);


exports.findAll = async (req, res) => {
    try {
        var param = {};
        if (Object.keys(req.body).length != 0) {
            var param = { where: req.body };
        }

        worship_main_activity.findAll({
            include: [{// Notice `include` takes an ARRAY
                model: worship_main
            }]
        }).then((result) => {
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