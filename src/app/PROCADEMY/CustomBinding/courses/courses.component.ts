import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cources',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CourcesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  courses = [
    {
      id: 1,
      name: "JavaScript Fundamentals",
      author: "John Smith",
      duration: "3 hours",
      type: "Free",
      price: 49.99,
      rating: 4.5,
      image: "../assets/javascript.jpg",
      description: "Learn the basics of JavaScript and prepare for a career as a front-end developer."
    },
    {
      id: 2,
      name: "Advanced React",
      author: "Jane Doe",
      duration: "5 hours",
      type: "Premium",
      price: 69.99,
      rating: 4.2,
      image: "../assets/react.jpg",
      description: "Master the latest features of React and build advanced, high-performance web applications."
    },
    {
      id: 3,
      name: "Python for Data Science",
      author: "John Doe",
      duration: "7 hours",
      type: "Free",
      price: 89.99,
      rating: 4.8,
      image: "../assets/python.jpg",
      description: "Learn how to use Python for data analysis, visualization, and machine learning."
    },
    {
      id: 4,
      name: "Web Design Fundamentals",
      author: "Emily Johnson",
      duration: "4 hours",
      type: "Free",
      price: 39.99,
      rating: 4.3,
      image: "../assets/web.jpg",
      description: "Learn the basics of web design and build beautiful, responsive websites."
    },
    {
      id: 5,
      name: "Cloud Computing with AWS",
      author: "Michael Brown",
      duration: "6 hours",
      type: "Premium",
      price: 79.99,
      rating: 4.7,
      image: "../assets/cloud.jpg",
      description: "Learn how to use Amazon Web Services to build, deploy, and scale applications in the cloud."
    },
    {
      id: 6,
      name: "Intro. to Machine Learning",
      author: "Jessica Williams",
      duration: "9 hours",
      type: "Free",
      price: 99.99,
      rating: 4.9,
      image: "../assets/ML.jpg",
      description: "Learn the basics of machine learning and build your first predictive models."
    },
    {
      id: 7,
      name: "Python for Data Science",
      author: "John Doe",
      duration: "7 hours",
      type: "Free",
      price: 89.99,
      rating: 4.8,
      image: "../assets/python.jpg",
      description: "Learn how to use Python for data analysis, visualization, and machine learning."
    },
    {
      id: 8,
      name: "Web Design Fundamentals",
      author: "Emily Johnson",
      duration: "4 hours",
      type: "Free",
      price: 39.99,
      rating: 4.3,
      image: "../assets/web.jpg",
      description: "Learn the basics of web design and build beautiful, responsive websites."
    },
    {
      id: 9,
      name: "Cloud Computing with AWS",
      author: "Michael Brown",
      duration: "6 hours",
      type: "Premium",
      price: 79.99,
      rating: 4.7,
      image: "../assets/cloud.jpg",
      description: "Learn how to use Amazon Web Services to build, deploy, and scale applications in the cloud."
    },
    {
      id: 10,
      name: "Intro. Machine Learning",
      author: "Jessica Williams",
      duration: "9 hours",
      type: "Free",
      price: 99.99,
      rating: 4.9,
      image: "../assets/ML.jpg",
      description: "Learn the basics of machine learning and build your first predictive models."
    }
  ]

  getTotalCourses():number{
    return this.courses.length;
  }
  getTotalFreeCourses():number{
    return this.courses.filter(course => course.type === 'Free').length;
  }
  getTotalPremiumCourses():number{
    return this.courses.filter(course => course.type === 'Premium').length;
  }
  coursesCountRadioButton: string = 'All';
  searchText:string = '';

  onFilterRadioButtonChanged(data: string):void{
    this.coursesCountRadioButton = data;
  }

  onSearchTextEntered(searchValue: string):void{
    this.searchText = searchValue;
  }
  
}
