export const menus = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Tours",
    to: "/tours",
    children: [
      {
        label: "Details",
        to: "/details",
        children: [
          {
            label: "Description",
            to: "/description",
            children: [
              {
                label: 'Additional information',
                to: "/info"
              }
            ]
          },
        ],
      },
    ],
  },
  {
    label: "Hotel reservation",
    to: "/reservation",
    children: [
      {
        label: "Location",
        to: "/location",
        children: [
          {
            label: 'Dates',
            to: "/dates"
          }
        ]
      },
    ],
  },
  {
    label: "Authentification",
    to: "/security",
    children: [
      {
        label: "Login",
        to: "/login",
      },
      {
        label: "Register",
        to: "/register"
      },
    ],
  },
];

