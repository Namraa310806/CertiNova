import express from 'express';
import { addEvent, getEventsByOrganisation, deleteEvent } from '../controllers/eventController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Event routes
router.post('/addEvent', protect, addEvent);
router.get('/:organisationID', protect, getEventsByOrganisation);
router.delete('/:eventId', protect, deleteEvent);

export default router;
