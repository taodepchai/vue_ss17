import Bt1 from "../components/components/Bt1.vue";
import Bt2 from "../components/components/Bt2.vue";
import Bt3 from "../components/components/Bt3.vue";
import Bt4 from "../components/components/Bt4.vue";
import Bt5 from "../components/components/Bt5.vue";
import ListUser from "../components/components/bt9/ListUser.vue";
import UserDetail from "../components/components/bt9/UserDetail.vue";
import ListEmployee from "../components/components/bt10/ListEmployee.vue";
import EmployeeProfile from "../components/components/bt10/EmployeeProfile.vue";
import EmployeeContact from "../components/components/bt10/EmployeeContact.vue";
import EmployeeProjects from "../components/components/bt10/EmployeeProjects.vue";
import EmployeeDetail from "../components/components/bt10/EmployeeDetail.vue";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  { path: "/", component: Bt1, alias: "/home" },
  { path: "/contact", component: Bt2, alias: "/get-in-touch" },
  { path: "/search", component: Bt3 },
  { path: "/:pathMatch(.*)*", component: Bt4 },
  { path: "/:pathMatch(.*)*", component: Bt5 },
  { path: "/", component: ListUser },
  { path: "/user/:id", component: UserDetail, name: "UserDetail" },
  {
    path: "/employees",
    component: ListEmployee,
  },
  {
    path: "/employees/:id",
    component: EmployeeDetail,
    children: [
      {
        path: "profile",
        component: EmployeeProfile,
        name: "profile",
      },
      {
        path: "projects",
        component: EmployeeProjects,
        name: "projects",
      },
      {
        path: "contact",
        component: EmployeeContact,
        name: "contact",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
