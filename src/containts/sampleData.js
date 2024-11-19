export const sampleChats = [
  {
    _id: "1",
    groupChat: false,
    name: "John Doe",
    avatar: ["https://randomuser.me/api/portraits/men/1.jpg"],
    members: ["1", "2"],
  },
  {
    _id: "2",
    groupChat: false,
    name: "Project Team",
    avatar: ["https://randomuser.me/api/portraits/men/2.jpg"],
    members: ["1", "2", "3"],
  },
  {
    _id: "3",
    groupChat: false,
    name: "Emily Smith",
    avatar: ["https://randomuser.me/api/portraits/women/3.jpg"],
    members: ["3", "4"],
  },
  {
    _id: "4",
    groupChat: false,
    name: "Michael Brown",
    avatar: ["https://randomuser.me/api/portraits/men/4.jpg"],
    members: ["5", "6"],
  },
  {
    _id: "5",
    groupChat: true,
    name: "Design Team",
    avatar: [
      "https://randomuser.me/api/portraits/men/5.jpg",
      "https://randomuser.me/api/portraits/men/5.jpg",
      "https://randomuser.me/api/portraits/men/5.jpg",
    ],
    members: ["1", "4", "5", "6"],
  },
];

export const sampleUsers = [
  {
    _id: "1",
    name: "John Doe",
    avator: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    _id: "2",
    name: "Jane Smith",
    avator: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    _id: "3",
    name: "Emily Johnson",
    avator: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    _id: "4",
    name: "Michael Brown",
    avator: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    _id: "5",
    name: "Sarah Davis",
    avator: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    _id: "6",
    name: "David Wilson",
    avator: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    _id: "7",
    name: "Jessica Taylor",
    avator: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    _id: "8",
    name: "Christopher Anderson",
    avator: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    _id: "9",
    name: "Amanda Martinez",
    avator: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    _id: "10",
    name: "Daniel Thomas",
    avator: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

export const sampleNotifications = [
  {
    sender: {
      avator: "https://randomuser.me/api/portraits/men/4.jpg",
      name: "PradeepDurai",
    },
    _id: "7",
  },
];

export const sampleMessage = [
  {
    attachments: [
      {
        url: "https://randomuser.me/api/portraits/men/1.jpg",
        publc_id: "PradeepDurai",
      },
    ],
    _id: "sfnhlkoh",

    content: "Hello, how are you?",
    sender: {
      _id: "aspd",
      name: "John Doe",
    },
    chat: "chatId",
    createdAt: "2024-11-19T12:00:00.000Z",
  },

  {
    attachments: [
      {
        url: "https://randomuser.me/api/portraits/men/6.jpg",
        publc_id: "PradeepDurai",
      },
    ],
    _id: "sfnhlko",

    content: "Hello, how are you?",
    sender: {
      _id: "asd",
      name: "John Doe",
    },
    chat: "chatId",
    createdAt: "2024-11-19T12:00:00.000Z",
  },

  {
    attachments: [
      {
        url: "https://randomuser.me/api/portraits/men/7.jpg",
        publc_id: "PradeepDurai",
      },
    ],
    _id: "sfnhlk",

    content: "Hello, how are you?",
    sender: {
      _id: "aspd",
      name: "John Doe",
    },
    chat: "chatId",
    createdAt: "2024-11-19T12:00:00.000Z",
  },
];
