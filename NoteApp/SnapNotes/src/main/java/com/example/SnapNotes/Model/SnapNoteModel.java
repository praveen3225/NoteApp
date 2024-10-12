package com.example.SnapNotes.Model;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Component
@Scope("prototype")
@Entity
public class SnapNoteModel {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int index;
	String title;
	String author;
	String content;
	public int getIndex() {
		return index;
	}
	public void setIndex(int index) {
		this.index = index;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	@Override
	public String toString() {
		return "SnapNoteModel [index=" + index + ", title=" + title + ", author=" + author + ", content=" + content
				+ "]";
	}
	

}
