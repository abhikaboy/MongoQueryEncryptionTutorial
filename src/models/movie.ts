import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const MovieSchema = new Schema({
    Name: {
      type: String,
      required: 'Enter a first name'
    }
    // lastName: {
    //     type: String,
    //     required: 'Enter a first name'
    // },
    // email: {
    //     type: String            
    // },
    // company: {
    //     type: String            
    // },
    // phone: {
    //     type: Number            
    // },
    // created_date: {
    //     type: Date,
    //     default: Date.now
    // }
});