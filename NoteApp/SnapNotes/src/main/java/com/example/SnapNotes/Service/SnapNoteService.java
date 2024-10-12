package com.example.SnapNotes.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SnapNotes.Model.SnapNoteModel;
import com.example.SnapNotes.Repo.SnapNoteRepo;

@Service
public class SnapNoteService {
	
	@Autowired
	SnapNoteRepo repo;

	public SnapNoteRepo getRepo() {
		return repo;
	}

	public void setRepo(SnapNoteRepo repo) {
		this.repo = repo;
	}
	
	public List<SnapNoteModel> getNotes()
	{
		return repo.findAll();
	}
	

}
