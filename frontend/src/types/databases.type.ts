export interface UserProfile {
  id: string;
  name: string;
  surname: string;
  
  accommodation_id: string;
  accommodation_name: string;
  room_id: string;
  room_details: string; // e.g. "Block B, Room 204"
}

export interface Category {
  id: string;
  name: string;
}

export interface ReportFormData {
  category_id: string;
  description: string;
  availability_days: string[];
  availability_times: string;
  photos: File[];
  video?: File | null;
}

export interface ReportPayload {
  student_id: string;
  room_id: string;
  category_id: string;
  description: string;
  status: 'PENDING' | 'IN_PROGRESS' | 'RESOLVED';
  availability_days: string[];
  availability_times: string;
}