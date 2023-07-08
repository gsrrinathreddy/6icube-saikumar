import express from 'express';
import { register,deleteUserById, updateByUserId, getAllUSers} from '../../controllers/auth/authcontroller.js';
const router = express.Router();

router.post('/register', register);
router.put('/users/:_id', updateByUserId);
router.delete('/users/:_id',deleteUserById);
router.get('/',getAllUSers);

export default router;