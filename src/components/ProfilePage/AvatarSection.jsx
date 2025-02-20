import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { editUserAvatar, fetchUserAvatar } from "../../api/usersService";
import { fetchCurrentUser } from "../../store/features/authSlice";
import {
  ProfileAvatar,
  DefaultAvatar,
  AvatarContainer,
  EditOverlay,
  AvatarForm,
  AvatarInput,
  ErrorMessage,
  ButtonGroup,
  Button,
} from "./styles";

const AvatarSection = ({ user, avatarUrl, setAvatarUrl, auth }) => {
  const dispatch = useDispatch();
  const [avatarLoading, setAvatarLoading] = useState(true);
  const [avatarError, setAvatarError] = useState(false);
  const [showAvatarForm, setShowAvatarForm] = useState(false);
  const [newAvatarUrl, setNewAvatarUrl] = useState("");
  const [updateError, setUpdateError] = useState("");

  const handleAvatarSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = user.user || user;
      await editUserAvatar(userData.username, newAvatarUrl, auth.token);
      setAvatarUrl(newAvatarUrl);
      setAvatarLoading(true);
      setAvatarError(false);
      await dispatch(fetchCurrentUser());
      setShowAvatarForm(false);
      setNewAvatarUrl("");
      setUpdateError("");
    } catch (err) {
      setUpdateError("Failed to update avatar. Please try again.");
      console.error("Failed to update avatar:", err);
    }
  };

  return (
    <>
      <AvatarContainer>
        {avatarUrl && !avatarError ? (
          <ProfileAvatar
            src={avatarUrl}
            alt={`${user.user.username}'s profile picture`}
            loading="lazy"
            onLoad={() => setAvatarLoading(false)}
            onError={() => {
              setAvatarLoading(false);
              setAvatarError(true);
              setAvatarUrl("");
            }}
            style={{
              opacity: avatarLoading ? 0.6 : 1,
              transform: avatarLoading ? "scale(0.95)" : "scale(1)",
              transition: "all 0.3s ease-in-out",
            }}
          />
        ) : (
          <DefaultAvatar />
        )}
        <EditOverlay
          className="edit-overlay"
          onClick={() => setShowAvatarForm(true)}
        >
          <FaEdit />
        </EditOverlay>
      </AvatarContainer>

      {showAvatarForm && (
        <AvatarForm onSubmit={handleAvatarSubmit}>
          <AvatarInput
            type="url"
            value={newAvatarUrl}
            onChange={(e) => setNewAvatarUrl(e.target.value)}
            placeholder="Enter new avatar URL"
            required
          />
          {updateError && <ErrorMessage>{updateError}</ErrorMessage>}
          <ButtonGroup>
            <Button type="submit" variant="primary">
              Update Avatar
            </Button>
            <Button type="button" onClick={() => setShowAvatarForm(false)}>
              Cancel
            </Button>
          </ButtonGroup>
        </AvatarForm>
      )}
    </>
  );
};

export default AvatarSection;
