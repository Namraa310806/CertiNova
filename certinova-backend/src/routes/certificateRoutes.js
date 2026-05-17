import express from 'express';
import upload from '../../middleware/upload.js';
import { protect } from '../middleware/authMiddleware.js';
import { 
  addCertificateConfig, 
  getCertificateConfig, 
  updateCertificateConfig,
  uploadCertificateTemplate,
  storeGeneratedCertificate,
  getGeneratedCertificates,
  getDecryptedGeneratedCertificates,
  verifyUUID,
  verifyCertificateFullByUUID,
  getCertificateUUIDs,
  getOrganizationStats,
  getAllOrganizationStats,
  updateRecipientCount
} from '../controllers/certificateController.js';

const router = express.Router();

// Certificate configuration routes
router.post('/addCertificateConfig', protect, addCertificateConfig);
router.get('/config/:eventId', protect, getCertificateConfig);
router.put('/config/:configId', protect, updateCertificateConfig);

// Certificate template upload route
router.post('/upload-template', protect, upload.single('certificate'), uploadCertificateTemplate);

// Generated certificate data storage route
router.post('/storeGenerated', protect, storeGeneratedCertificate);

// Get generated certificates with filtering and pagination
router.get('/generated', protect, getGeneratedCertificates);

// Decrypt and get generated certificates with password
router.post('/generated/decrypt', protect, getDecryptedGeneratedCertificates);

// UUID verification routes
router.get('/verify/:uuid', verifyUUID);
router.get('/verify-full/:uuid', verifyCertificateFullByUUID);
router.get('/generated/:id/uuids', protect, getCertificateUUIDs);

// Organization statistics routes
router.get('/organization-stats/:organizationName', protect, getOrganizationStats);
router.get('/all-organization-stats', protect, getAllOrganizationStats);

router.patch('/update-recipient-count', protect, updateRecipientCount);

export default router;
