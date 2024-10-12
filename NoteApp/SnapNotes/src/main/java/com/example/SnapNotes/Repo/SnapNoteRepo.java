package com.example.SnapNotes.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.SnapNotes.Model.SnapNoteModel;

@Repository
public interface SnapNoteRepo extends JpaRepository<SnapNoteModel, Integer>{

}
