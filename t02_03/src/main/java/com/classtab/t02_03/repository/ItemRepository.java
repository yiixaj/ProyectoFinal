package com.classtab.t02_03.repository;

import com.classtab.t02_03.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item, Long> {
}
