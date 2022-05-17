const router = require('express').Router();
const {Comment} = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req,res) => {
    try {
        const addComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
            post_id: req.body.post_id
        });
        res.redirect( req.header( 'Redirect' ) );
    } catch (error) {
        res.status(500).json(error)
    }
});


module.exports = router;