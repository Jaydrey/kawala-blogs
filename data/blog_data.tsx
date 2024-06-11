import Blog from "@/types/blog";
import User, { createFullName } from "@/types/user";

export const author: User = {
  firstName: "Norbert",
  lastName: "Kawala",
  fullName: createFullName("Norbert", null, "Kawala"),
};

export const blogs: Blog[] = [
  {
    title: "Postgres is eating the database world",
    shortDescription:
      "PostgreSQL isn't just a simple relational database; it's a data...",
    publishedDate: "Mar 15",
    totalComments: 16,
    totalLikes: 1700,
    author: author,
    isUserSaved: false,
    isPublished: true,
  },
  {
    title: "Dependency Inversion Vs Dependency Injection",
    shortDescription:
      "Dependency inversion and dependency injection are two closely related concepts in software...",
    publishedDate: "Jan 8",
    totalComments: 2,
    totalLikes: 419,
    author: author,
    isUserSaved: false,
    isPublished: true,
  },
  {
    title: "End-to-End Data Engineering System on Real Data with Kafka, Spark, Airflow, Postgres, and Docker",
    shortDescription:
      "Building a Practical Data Pipeline with Kafka, Spark, Airflow, Postgres, and Docker",
    publishedDate: "Jan 19",
    totalComments: 11,
    totalLikes: 1200,
    author: author,
    isUserSaved: false,
    isPublished: true,
  },
];


