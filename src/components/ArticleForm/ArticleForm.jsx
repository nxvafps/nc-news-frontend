import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTopics } from "../../hooks";
import { createArticle } from "../../api/articlesService";
import {
  FormContainer,
  Form,
  Input,
  TextArea,
  Select,
  SubmitButton,
  ErrorText,
} from "./styles";

const ArticleForm = () => {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const { topics, isLoading: isLoadingTopics } = useTopics();
  const [formData, setFormData] = useState({
    title: "",
    topic: "",
    body: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate("/signin", { replace: true });
    }
  }, [token, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const article = await createArticle(formData, token);
      navigate(`/articles/${article.article_id}`);
    } catch (err) {
      setError(err.response?.data?.msg || "Failed to create article");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoadingTopics) return <div>Loading topics...</div>;
  if (!token) return null;

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <h2>Create New Article</h2>

        <div>
          <label htmlFor="title">Title</label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="topic">Topic</label>
          <Select
            id="topic"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            required
          >
            <option value="">Select a topic</option>
            {topics.map((topic) => (
              <option key={topic.slug} value={topic.slug}>
                {topic.slug}
              </option>
            ))}
          </Select>
        </div>

        <div>
          <label htmlFor="body">Content</label>
          <TextArea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            required
            rows={10}
          />
        </div>

        {error && <ErrorText>{error}</ErrorText>}

        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating..." : "Create Article"}
        </SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default ArticleForm;
