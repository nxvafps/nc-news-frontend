import { useState } from "react";
import { AvatarContainer, Avatar, StyledFaUserCircle } from "./styles";

const CommentAvatar = ({ author, avatarUrl }) => {
  const [isLoading, setIsLoading] = useState(true);

  if (!avatarUrl) {
    return (
      <AvatarContainer>
        <StyledFaUserCircle size={48} color="#666" />
      </AvatarContainer>
    );
  }

  return (
    <AvatarContainer>
      <Avatar
        src={avatarUrl}
        alt={`${author}'s profile picture`}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
        style={{
          opacity: isLoading ? 0.6 : 1,
          transform: isLoading ? "scale(0.95)" : "scale(1)",
        }}
      />
    </AvatarContainer>
  );
};

export default CommentAvatar;
