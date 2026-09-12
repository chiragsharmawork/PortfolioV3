export async function getLeetCodeStats(username: string) {
  try {
    const query = `
      query getUserProfile($username: String!) {
        matchedUser(username: $username) {
          submitStats {
            acSubmissionNum {
              difficulty
              count
            }
          }
        }
      }
    `;

    const response = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { username }
      }),
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error('Failed to fetch LeetCode stats');
    }

    const data = await response.json();
    const submissions = data.data?.matchedUser?.submitStats?.acSubmissionNum;
    
    if (submissions) {
      const allStats = submissions.find((s: any) => s.difficulty === 'All');
      return allStats ? allStats.count : 300;
    }
    
    return 300; // Fallback
  } catch (error) {
    console.error("LeetCode fetch error:", error);
    return 300; // Fallback
  }
}
