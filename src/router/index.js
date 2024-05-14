import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/user/LoginView.vue";
import JoinView from "@/views/user/JoinView.vue";
import JoinOkView from "@/views/user/JoinOkView.vue";
import FindPwdView from "@/views/user/FindPwdView.vue";
import ProfileView from "@/views/user/ProfileView.vue";
import MakePlanView from "@/views/plan/MakePlanView.vue";
import MyPlanView from "@/views/plan/MyPlanView.vue";
import MyPlanDetailView from "@/views/plan/MyPlanDetailView.vue";
import ArticleListView from "@/views/board/ArticleListView.vue";
import ArticleDetailView from "@/views/board/ArticleDetailView.vue";
import WriteArticleView from "@/views/board/WriteArticleView.vue";
import AttractionInfo from "@/components/map/AttractionInfo.vue";
import UpdateArticleView from "@/views/board/UpdateArticleView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      children: [
        {
          path: ":contentId",
          name: "content",
          component: AttractionInfo,
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/join",
      name: "join",
      component: JoinView,
    },
    {
      path: "/join_ok",
      name: "join_ok",
      component: JoinOkView,
    },
    {
      path: "/findpwd",
      name: "findpwd",
      component: FindPwdView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
    {
      path: "/makeplan",
      name: "makeplan",
      component: MakePlanView,
    },
    {
      path: "/myplan",
      name: "myplan",
      component: MyPlanView,
    },
    {
      path: "/myplan/:id",
      name: "myplandetail",
      component: MyPlanDetailView,
    },
    {
      path: "/board",
      name: "board",
      component: ArticleListView,
    },
    {
      path: "/board/:id",
      name: "detail",
      component: ArticleDetailView,
    },
    {
      path: "/board/write",
      name: "write",
      component: WriteArticleView,
    },
    {
      path: "/bord/update/:id",
      name: "update",
      component: UpdateArticleView,
    },
  ],
});

export default router;
