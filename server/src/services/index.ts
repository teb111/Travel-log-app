import ExperienceService from "./experienceService";

const ServiceContainer = (): ReturnType<typeof Object> => {
  return {
    experienceService: ExperienceService(),
  };
};

export default ServiceContainer();
