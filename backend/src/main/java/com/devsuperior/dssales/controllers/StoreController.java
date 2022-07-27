package com.devsuperior.dssales.controllers;

import java.util.List;

import com.devsuperior.dssales.dto.SalesSummaryDTO;
import com.devsuperior.dssales.services.SaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dssales.dto.StoreDTO;
import com.devsuperior.dssales.services.StoreService;

@RestController
@RequestMapping(value = "/stores")
public class StoreController {

	@Autowired
	private StoreService service;
	@Autowired
	private SaleService serviceSales;
	
	@GetMapping
	public ResponseEntity<List<StoreDTO>> findAll() {
		List<StoreDTO> list = service.findAll();
		return ResponseEntity.ok(list);
	}
	@GetMapping(value = "/summary")
	public ResponseEntity<SalesSummaryDTO> salesSummary(
			@RequestParam(value = "storeId", defaultValue = "0") Long storeId) {
		SalesSummaryDTO obj = serviceSales.salesSummary(storeId);
		return ResponseEntity.ok(obj);
	}
}
