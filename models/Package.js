// models/Package.js
import mongoose from 'mongoose';

const packageSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  type: { type: String, required: true, default: 'Umrah' },
  rating: { type: Number, required: true },
  desc: { type: String, required: false },
  price: { type: Number, required: true },
  imgSrc: { type: String, required: false },
  makkahHotel: { type: String, required: true },
  madinahHotel: { type: String, required: true },
  makkahNights: { type: Number, required: false },
  madinahNights: { type: Number, required: false },
});

export default mongoose.models?.Package || mongoose.model('Package', packageSchema);