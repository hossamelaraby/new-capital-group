import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error caught by ErrorBoundary:', error, errorInfo);
  }

  private handleReset = () => {
    try {
      // Clear potentially corrupted custom storage keys while preserving language
      const lang = localStorage.getItem('nc_lang');
      localStorage.clear();
      if (lang) localStorage.setItem('nc_lang', lang);
    } catch {
      // ignore
    }
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#F3F0E9] text-[#1F292C] flex items-center justify-center p-6">
          <div className="max-w-lg w-full bg-[#FBFAF6] border border-[#DCD3C5] rounded-3xl p-8 space-y-6 shadow-xl text-center">
            <div className="w-16 h-16 rounded-full bg-red-100 text-red-600 mx-auto flex items-center justify-center">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-[#123D40]">
                حدث خطأ في تحميل البيانات
              </h2>
              <p className="text-xs text-[#687174] leading-relaxed">
                قد يكون حدث خطأ في البيانات المحفوظة محلياً أو حجم الصور المرفوعة. يمكنك إعادة ضبط واستعادة البيانات الأصلية للكتالوج بنقرة واحدة.
              </p>
            </div>

            {this.state.error && (
              <div className="p-3 rounded-xl bg-red-50 text-red-700 text-left font-mono text-[11px] overflow-auto max-h-24">
                {this.state.error.message}
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={this.handleReset}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#123D40] hover:bg-[#1A5054] text-white text-xs font-bold transition-colors flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                <span>إعادة ضبط البيانات والتعافي</span>
              </button>

              <button
                onClick={() => window.location.href = '/'}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#FBFAF6] border border-[#DCD3C5] hover:border-[#123D40] text-[#123D40] text-xs font-bold transition-colors flex items-center justify-center gap-2"
              >
                <Home className="w-4 h-4" />
                <span>الصفحة الرئيسية</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
