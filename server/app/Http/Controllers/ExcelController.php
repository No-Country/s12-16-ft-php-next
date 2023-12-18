<?php

namespace App\Http\Controllers;
namespace App\Exports;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\ExcelExport;

class ExcelController extends Controller
{
    public function export()
    {
        return Excel::download(new ExcelExport, 'bill.xlsx');
    }
}
