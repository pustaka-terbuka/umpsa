# Pustaka Terbuka — UMPSA (Universiti Malaysia Pahang Al-Sultan Abdullah)

> **Pustaka Terbuka: Katalog Induk Terbuka untuk Perpustakaan dan Sekolah Malaysia.**  
> *Official Perpustakaan Universiti Malaysia Pahang Al-Sultan Abdullah (UMPSA) Bibliographic Dataset & Standalone Harvester.*

This repository contains the harvested open MARCXML collection and harvester pipeline for **Perpustakaan Universiti Malaysia Pahang Al-Sultan Abdullah** (`UMPSA`), contributing to the national Malaysian union catalog at [pustaka-terbuka/opac](https://github.com/pustaka-terbuka/opac).

---

## Institutional Metadata

| Attribute | Value |
| :--- | :--- |
| **Institution Code** | `umpsa` |
| **Agency Code** | `UMPSA` |
| **Official Name** | Perpustakaan Universiti Malaysia Pahang Al-Sultan Abdullah |
| **Institution Type** | `university` |
| **State / Territory** | Pahang |
| **Classification Scheme** | `LCC` |
| **OPAC Base URL** | [https://efind.ump.edu.my/](https://efind.ump.edu.my/) |
| **Platform / Engine** | `koha` |
| **Default Branch** | Perpustakaan UMPSA (Pekan) |

---

## Directory Structure

```text
umpsa/
├── README.md                      # Institutional repository documentation
├── package.json                   # Node.js project specification & scripts
├── harvest/
│   └── inbox/umpsa/             # Sealed MARCXML batch chunks and manifests
│       └── <run-id>-chunk-001/
│           ├── manifest.json      # Chunk SHA-256 manifest & metadata
│           ├── provenance.jsonl   # Record-level attribution and fetch logs
│           └── records/           # Batched MARC21 slim XML files
├── tools/
│   ├── harvesters/umpsa/        # Automated OPAC crawler & MARC21 converter
│   ├── lib/                       # Supporting MARCXML, LCC, and validation utilities
│   ├── schemas/                   # JSON schemas for manifests and provenance
│   ├── validate-inbox.js          # Dataset integrity and schema validator
│   ├── merge.js                   # Local catalog merge engine
│   └── ingest-to-master.js        # Safe master ingestion bridge into pustaka-terbuka/opac
└── tests/
    └── harvester-umpsa.test.js  # Autonomous test suite
```

---

## Usage

```bash
# Install dependencies
npm install

# Test run harvester (10 sample records)
npm run harvest:sample

# Run harvester with chunking
npm run harvest:chunked

# Validate dataset integrity
npm run validate-inbox harvest/inbox/umpsa/<chunk-directory>

# Ingest new harvested batches into the central OPAC union catalog
npm run ingest:master
```

---

## Attribution & License

Dataset harvested and preserved under open library metadata standards for educational, civic, and cooperative indexing. Attribution: **Perpustakaan Universiti Malaysia Pahang Al-Sultan Abdullah (UMPSA)** & **Pustaka Terbuka**.
