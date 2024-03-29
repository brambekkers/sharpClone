import { rand } from '@vueuse/core';

export const useUserStore = defineStore('user', () => {
  const user = ref({});
  const stats = computed(() => user.value.stats || {});
  const topics = computed(() => user.value.topics || []);
  const topicsByKey = computed(() => {
    const object = {}
    topics.value.forEach((t) => {
      object[t.key] = t
    })
    return object
  })
  const settings = computed(() => user.value.settings || {});
  const isUserLoading = ref(false);
  const isUserError = ref(false);

  const fetchUser = async (userId) => {
    try {
      const response = await fetch(`http://localhost:3000/users/${userId}`);
      user.value = await response.json();
    } catch (error) {
      isUserError.value = true;
      console.log(error);
    } finally {
      isUserLoading.value = false;
    }
  };

  const getRandomUser = () => {
    fetchUser(`user${rand(1, 10)}`);
  };

  const updateUser = async () => {
    try {
      await fetch(`http://localhost:3000/users/${user.value.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          ...user.value,
          stats: stats.value,
          topics: topics.value,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const calculatePerformancePercentage = () => {
    // Type checking to ensure all inputs are numbers
    if (
      typeof stats.value?.totalQuestions !== 'number'
      || typeof stats.value?.correctAnswers !== 'number'
      || typeof stats.value?.wrongAnswers !== 'number'
      || typeof stats.value?.unansweredQuestions !== 'number'
    ) {
      console.error('All inputs must be numbers');
      return;
    }

    // Calculate the percentage of correct answers
    const calculatedPercentage = (stats.value.correctAnswers / stats.value.totalQuestions) * 100;

    // Update the reactive percentage ref, rounded to one decimal place
    stats.value.percentage = Math.round(calculatedPercentage * 10) / 10;
  };

  return {
    user,
    stats,
    topics,
    topicsByKey,
    settings,
    fetchUser,
    getRandomUser,
    updateUser,
    calculatePerformancePercentage,
  };
});

export default useUserStore;
