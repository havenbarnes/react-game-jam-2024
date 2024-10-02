const MAX_LENGTH = 10;

const sortLeaderboard = (a, b) => {
  if (a.level !== b.level) {
    return a.level < b.level ? 1 : -1;
  }
  return a.time > b.time ? 1 : -1;
};

export const useLeaderboard = () => {
  const storedLeaderboard =
    JSON.parse(localStorage.getItem("leaderboard")) || [];
  const leaderboard = storedLeaderboard.sort(sortLeaderboard);

  const addResult = ({ level, time }) => {
    let newLeaderboard = leaderboard;
    newLeaderboard.append({ level, time });

    newLeaderboard.sort(sortLeaderboard);
    newLeaderboard = newLeaderboard.slice(0, MAX_LENGTH);

    localStorage.setItem("leaderboard", JSON.stringify(newLeaderboard));
  };

  return {
    leaderboard,
    addResult,
  };
};
