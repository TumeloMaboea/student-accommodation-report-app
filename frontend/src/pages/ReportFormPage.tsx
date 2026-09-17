import React, { useState } from 'react';
import type { UserProfile, Category, ReportFormData } from '../types/databases.type';
import '../styles/reportform.css';

interface ReportFormProps {
  currentUser: UserProfile; // Passed from Auth state or context
  categories: Category[];
  onSubmitReport: (formData: ReportFormData) => Promise<void>;
}

const DAYS_OF_WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const ReportFormPage: React.FC<ReportFormProps> = ({ currentUser, categories, onSubmitReport }) => {
  const [categoryId, setCategoryId] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [availabilityTimes, setAvailabilityTimes] = useState<string>('10:00 - 12:00');
  const [photos, setPhotos] = useState<File[]>([]);
  const [video, setVideo] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPhotos(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!categoryId || !description) {
      alert('Please select a category and fill in the description.');
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmitReport({
        category_id: categoryId,
        description,
        availability_days: selectedDays,
        availability_times: availabilityTimes,
        photos,
        video,
      });
      alert('Report submitted successfully!');
    } catch (error) {
      console.error('Submission failed:', error);
      alert('Failed to submit report.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container">
      <div className="report-card">
        <h2>Report a Maintenance Problem</h2>
        

        

        <form onSubmit={handleSubmit}>
          {/* Issue Category */}
          <div className="form-group">
            <label className="form-label">Issue Category</label>
            <select
              className="form-control"
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              required
            >
              <option value="">-- Select Category --</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              placeholder="e.g., Shower is leaking and water is not draining properly."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          {/* Availability Days */}
          <div className="form-group">
            <label className="form-label">Availability Days for Repair</label>
            <div className="days-selector">
              {DAYS_OF_WEEK.map((day) => (
                <button
                  type="button"
                  key={day}
                  className={`day-chip ${selectedDays.includes(day) ? 'selected' : ''}`}
                  onClick={() => toggleDay(day)}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* Availability Time Slots */}
          <div className="form-group">
            <label className="form-label">Availability Times</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g., 10:00 - 12:00"
              value={availabilityTimes}
              onChange={(e) => setAvailabilityTimes(e.target.value)}
            />
          </div>

          {/* Photo Upload */}
          <div className="form-group">
            <label className="form-label">Attach Photo(s)</label>
            <input
              type="file"
              accept="image/*"
              multiple
              className="form-control"
              onChange={handlePhotoUpload}
            />
          </div>

          {/* Video Upload */}
          <div className="form-group">
            <label className="form-label">Attach Video (Optional)</label>
            <input
              type="file"
              accept="video/*"
              className="form-control"
              onChange={(e) => setVideo(e.target.files ? e.target.files[0] : null)}
            />
          </div>

          <button type="submit" className="btn-primary" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting Report...' : 'Submit  Report'}
          </button>
        </form>
      </div>
    </div>
  );
};