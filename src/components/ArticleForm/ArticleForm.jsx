import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTopics } from "../../hooks";
import {
  createArticle,
  getArticleById,
  updateArticle,
} from "../../api/articlesService";
import {
  FormContainer,
  Form,
  Input,
  TextArea,
  Select,
  SubmitButton,
  ErrorText,
  ButtonContainer,
  CancelButton,
} from "./styles";

const ArticleForm = () => {
  const navigate = useNavigate();
  const { articleId } = useParams();
  const { token } = useSelector((state) => state.auth);
  const { topics, isLoading: isLoadingTopics } = useTopics();
  const [formData, setFormData] = useState({
    title: "",
    topic: "",
    body: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(!!articleId);
  const isEditMode = !!articleId;

  useEffect(() => {
    if (!token) {
      navigate("/signin", { replace: true });
    }
  }, [token, navigate]);

  useEffect(() => {
    const loadArticle = async () => {
      if (articleId) {
        try {
          const article = await getArticleById(articleId);
          setFormData({
            title: article.title,
            topic: article.topic,
            body: article.body,
          });
        } catch (err) {
          setError("Failed to load article");
        } finally {
          setIsLoading(false);
        }
      }
    };

    loadArticle();
  }, [articleId]);

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
      if (isEditMode) {
        await updateArticle(articleId, { body: formData.body }, token);
        navigate(`/articles/${articleId}`);
      } else {
        const newArticle = await createArticle(formData, token);
        navigate(`/articles/${newArticle.article_id}`);
      }
    } catch (err) {
      setError(err.response?.data?.msg || "Failed to save article");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoadingTopics || isLoading) return <div>Loading...</div>;
  if (!token) return null;

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <h2>{isEditMode ? "Edit Article" : "Create New Article"}</h2>

        <div>
          <label htmlFor="title">Title</label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            disabled={isEditMode}
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
            disabled={isEditMode}
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

        <ButtonContainer>
          <CancelButton
            type="button"
            onClick={() => navigate(`/articles/${articleId || ""}`)}
          >
            Cancel
          </CancelButton>
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting
              ? isEditMode
                ? "Saving..."
                : "Creating..."
              : isEditMode
              ? "Save Changes"
              : "Create Article"}
          </SubmitButton>
        </ButtonContainer>
      </Form>
    </FormContainer>
  );
};

export default ArticleForm;
