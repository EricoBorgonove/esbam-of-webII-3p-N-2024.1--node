const {Users} = require ('../models')
require ('dotenv').config()

module.exports = class UsersController{
    static async showAll(req,res){
        try {
            const users = await Users.findAll()
            res.status(200).json({
                data: users
            })
        } catch (error) {
            res.status(500).json({
                error: e.message
            })
        }
    }
    static async show (req,res){
        try {
            const user = await Users.findByPk(req.params.id)
            res.status(200).json({
                data: user
            })            
        } catch (error) {
            res.status(500).json({
                error: e.message
            })           
        }
    }
}