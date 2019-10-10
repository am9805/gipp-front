import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/core/services/reports.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.sass']
})
export class CommentsComponent implements OnInit {
  reportId;
  showCList = false;
  comments: any;
  userId: string;
  public commentForm: FormGroup;
  commentFormS = false;

  constructor(public reportService: ReportsService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.reportId = Number(this.activatedRoute.snapshot.url[2].path.toString());
    this.userId = localStorage.getItem('userId');
    this.commentForm = new FormGroup({
      'description': new FormControl(''),
    });
  }

  showCommentsList() {
    this.commentFormS = !this.commentFormS;
    this.showCList = false;
  }

  getCommentsList() {
    this.showCList = !this.showCList;
    this.commentFormS = false;
    this.reportService.getCommentsByReport(this.reportId).subscribe(res => {
      this.comments = res['data'];
    });
  }

  sendComment() {
    const commentInfo = {
      'reportid': Number(this.reportId),
      'userid': Number(this.userId),
      'description': this.commentForm.get('description').value,
    };
    this.reportService.addComment(commentInfo).subscribe(response => {
      if (response) {
        alert(response['message']);
        this.commentFormS = false;
        this.commentForm.get('description').setValue('');
      }
    });
  }

}
