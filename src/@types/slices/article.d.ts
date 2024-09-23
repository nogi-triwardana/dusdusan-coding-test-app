type TArticleState = {
  isLoading: boolean;
  data: {
    imagePath: string;
    name: string;
    createAt: Date;
  }[] | [];
};