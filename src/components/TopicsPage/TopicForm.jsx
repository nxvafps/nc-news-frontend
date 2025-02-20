import { useState } from "react";
import { useSelector } from "react-redux";
import { createTopic } from "../../api/topicsService";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 2rem auto;
  padding: 1.75rem;
  background: linear-gradient(
    145deg,
    ${({ theme }) => theme.colors.background.secondary},
    ${({ theme }) => theme.colors.glass.background}
  );
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 32px ${({ theme }) => theme.colors.shadow.primary};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 0 12px 48px ${({ theme }) => theme.colors.shadow.primary};
    border-color: ${({ theme }) => theme.colors.accent.primary};
  }
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.background.secondary};
  color: ${({ theme }) => theme.colors.text.primary};
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.accent.muted};
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.background.secondary};
  color: ${({ theme }) => theme.colors.text.primary};
  min-height: 100px;
  resize: vertical;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.accent.muted};
  }
`;

const Button = styled.button`
  padding: 0.75rem 1rem;
  background: ${({ theme }) => theme.colors.accent.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px ${({ theme }) => theme.colors.shadow.accent};

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px ${({ theme }) => theme.colors.shadow.accentHover};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.error};
  margin: 0.5rem 0;
  font-size: 0.9rem;
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors.error}20;
  border-radius: 6px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`;

const CancelButton = styled(Button)`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text.primary};
  box-shadow: none;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.background.tertiary};
    transform: translateY(-2px);
  }
`;

const TopicForm = ({ onTopicCreated, onCancel }) => {
  const [formData, setFormData] = useState({ slug: "", description: "" });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isAuth, token } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAuth || !token) {
      setError("You must be logged in to create a topic");
      return;
    }

    try {
      setIsSubmitting(true);
      setError("");
      await createTopic(formData, token);
      setFormData({ slug: "", description: "" });
      if (onTopicCreated) onTopicCreated();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create topic");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (!isAuth) return null;

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        name="slug"
        placeholder="Topic name (e.g. coding)"
        value={formData.slug}
        onChange={handleChange}
        required
      />
      <TextArea
        name="description"
        placeholder="Topic description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      {error && <ErrorText>{error}</ErrorText>}
      <ButtonContainer>
        <CancelButton type="button" onClick={onCancel}>
          Cancel
        </CancelButton>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating..." : "Create Topic"}
        </Button>
      </ButtonContainer>
    </FormContainer>
  );
};

export default TopicForm;
