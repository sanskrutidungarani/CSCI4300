const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  userProfile: {
    id: {
      type: Number,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    mealPlans: [
      {
        header: {
          id: {
            type: Number,
            required: true
          },
          title: {
            type: String,
            required: true
          },
          img: {
            type: String,
            required: true
          }
        },
        content: [
          {
            id: {
              type: Number,
              required: true
            },
            foodName: {
              type: String,
              required: true
            },
            foodPortion: {
              type: Number,
              required: true
            },
            calories: {
              type: Number,
              required: true
            },
            carbs: {
              type: Number,
              required: true
            },
            protein: {
              type: Number,
              required: true
            }
          }
        ]
      }
    ]
  }
}, { timestamps: true });

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;