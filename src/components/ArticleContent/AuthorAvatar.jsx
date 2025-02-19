import { useState } from "react";
import {
  AuthorAvatarContainer,
  AuthorAvatar as StyledAvatar,
  StyledFaUserCircle,
} from "./styles";

const AuthorAvatar = ({ author, avatarUrl }) => {
  const [isLoading, setIsLoading] = useState(true);

  if (!avatarUrl) {
    return (
      <AuthorAvatarContainer>
        <StyledFaUserCircle color="#666" />
      </AuthorAvatarContainer>
    );
  }

  return (
    <AuthorAvatarContainer>
      <StyledAvatar
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
    </AuthorAvatarContainer>
  );
};

export default AuthorAvatar;
