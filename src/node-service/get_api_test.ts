 /**
* @api {post} /tag-service/tags/unfollow Unfollow tag
*
* @apiSampleRequest /tag-service/tags/unfollow
*
* @apiVersion 1.0.0
* @apiName Unfollow tag
* @apiGroup Tag Service
* @apiDescription API สำหรับยกเลิกติดตามแท็ก
*
* @apiHeader {String} Authorization Bearer token
* @apiHeaderExample {json} Request-Example:
* {
*    "Authorization" : "Bearer "
* }
* @apiParam {String} tag_name Tag name.
*
* @apiSuccess {Boolean} success Response status
* @apiSuccess {Object} data Data object.
* @apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*    "success": true
*}
*
* @apiErrorExample {json} Error-Response:
*HTTP/1.1 200 OK
*{
*    "success": false,
*    "error_code": 4000000,
*    "error_message": "ชื่อของแท็กไม่ถูกต้อง"
*}
*/