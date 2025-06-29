import { ref, push, serverTimestamp } from 'firebase/database';
import { database } from './firebase';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp?: any;
}

export const submitContactForm = async (formData: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    const contactsRef = ref(database, 'contacts');
    
    const contactData = {
      ...formData,
      timestamp: serverTimestamp(),
      status: 'new',
      read: false
    };

    await push(contactsRef, contactData);
    
    return {
      success: true,
      message: 'Thank you for your message! We\'ll get back to you soon.'
    };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      success: false,
      message: 'Sorry, there was an error sending your message. Please try again.'
    };
  }
}; 